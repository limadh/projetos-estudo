package com.backend.projeto.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;


import com.backend.projeto.entity.Cliente;
import com.backend.projeto.entity.dto.ClienteDTO;

@Component
public class ClienteConverter {
	
	public Cliente toDtoToEntity(ClienteDTO clienteDTO) {
		Cliente  cliente = new Cliente();
		cliente.setId(clienteDTO.getId());
		cliente.setNomeCliente(clienteDTO.getNomeCliente());
		cliente.setEmailCliente(clienteDTO.getEmailCliente());
		cliente.setTelefoneCliente(clienteDTO.getTelefoneCliente());
		cliente.setObsCliente(clienteDTO.getObsCliente());
		cliente.setNascimentoCliente(clienteDTO.getNascimentoCliente());
		return cliente;
	}
	
	public ClienteDTO toEntitytoDto(Cliente cliente) {
		ClienteDTO clienteDTO = new ClienteDTO();
		clienteDTO.setId(cliente.getId());
		clienteDTO.setNomeCliente(cliente.getNomeCliente());
		clienteDTO.setEmailCliente(cliente.getEmailCliente());
		clienteDTO.setTelefoneCliente(cliente.getTelefoneCliente());
		clienteDTO.setObsCliente(cliente.getObsCliente());
		clienteDTO.setNascimentoCliente(cliente.getNascimentoCliente());
		return clienteDTO;
	}

	public List<ClienteDTO> toEntitytoDto(List<Cliente> lista) {
		List<ClienteDTO> listaDTO = new ArrayList<ClienteDTO>();
		for (Cliente cliente : lista) {
			listaDTO.add(toEntitytoDto(cliente));
		}
		return listaDTO;
	}
	

}
