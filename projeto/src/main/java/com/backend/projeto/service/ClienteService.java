package com.backend.projeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.backend.projeto.converter.ClienteConverter;
import com.backend.projeto.entity.Cliente;
import com.backend.projeto.entity.dto.ClienteDTO;
import com.backend.projeto.exceptions.NotFoundException;
import com.backend.projeto.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	@Autowired
	private ClienteConverter converter;
	
	public List<ClienteDTO> listarTodosClientes() {
		List<Cliente> lista = repository.findAll();
		if (lista.isEmpty()) {
			throw new NotFoundException("Nenhum registro encontrado!!!");
		}
		return converter.toEntitytoDto(lista);
	}

	public Page<ClienteDTO> listarClientes(int page, int size) {
		Page<Cliente> lista = repository.findAll(PageRequest.of(page, size));
		if (lista.isEmpty()) {
			throw new NotFoundException("Nenhum registro encontrado!!!");
		}
		return new PageImpl<ClienteDTO>(converter.toEntitytoDto(lista.getContent()));
	}

	public ClienteDTO findById(long id) {
		Optional<Cliente> optional = repository.findById(id);
		
		if (!optional.isPresent()) {
			throw new NotFoundException("Nenhum registro encontrado!!!");
		}

		return converter.toEntitytoDto(optional.get());
	}

	public ClienteDTO alterar(ClienteDTO clienteDTO) {
		Cliente cliente = converter.toDtoToEntity(clienteDTO);
		repository.save(cliente);
		return converter.toEntitytoDto(cliente);
	}

	public ClienteDTO salvar(ClienteDTO clienteDTO) {
		Cliente cliente = converter.toDtoToEntity(clienteDTO);
		repository.save(cliente);
		clienteDTO.setId(cliente.getId());
		return clienteDTO;
	}
	
	public boolean checarRegistroCliente(String nome) {
		//List<Cliente> Cliente = repository.findByNomeCliente(nome);
		return false;
	}
	
	public int totalClientes() {
		return (int) repository.count();
	}

	public void remover(long id) {
		repository.deleteById(id);
	}

}