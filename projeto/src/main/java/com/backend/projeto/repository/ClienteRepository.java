package com.backend.projeto.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.projeto.entity.Cliente;


@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	List<Cliente> findByNomeCliente(String nomeCliente);
	
	List<Cliente> findByEmailCliente(String emailCliente);
	
	List<Cliente> findByTelefoneCliente(String telefoneCliente);

}
