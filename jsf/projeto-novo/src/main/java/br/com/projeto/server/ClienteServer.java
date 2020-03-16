package br.com.projeto.server;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.projeto.model.Cliente;
import br.com.projeto.repository.ClienteRepository;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Stateless
public class ClienteServer {
	
	@Inject
	private ClienteRepository repository;
	
	@Transactional
	public void novo(Cliente cliente) {
		repository.novo(cliente);		
	}

	public List<Cliente> buscarClientes() {
		List<Cliente> lista = repository.buscarClientes();
		return lista;
	}
	
	@Transactional
	public void alterar(Cliente cliente) {
		repository.alterar(cliente);
	}
	
	@Transactional
	public void deletar(Cliente cliente) {
		repository.remover(cliente);
	}

}
