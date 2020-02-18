package com.backend.projeto.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.backend.projeto.entity.dto.ClienteDTO;
import com.backend.projeto.service.ClienteService;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {
	
	@Autowired
	private ClienteService service;

	@GetMapping(path = {"/todos"})
	public  ResponseEntity<List<ClienteDTO>> listarTodosClientes() {		
		return ResponseEntity.ok(service.listarTodosClientes());
	}
	
	@GetMapping
	public ResponseEntity<Page<ClienteDTO>> listarClientes(
			@RequestParam("page") int page,
			@RequestParam("size") int size			
	){		
		return ResponseEntity.ok(service.listarClientes(page, size));
	}
	
	@GetMapping(path = {"/{id}"})
	public ResponseEntity<ClienteDTO> findById(@PathVariable long id) {
		return ResponseEntity.ok(service.findById(id));
	}

	@PostMapping
	public ResponseEntity<ClienteDTO> incluir(@RequestBody ClienteDTO clienteDTO) {
		return ResponseEntity.ok(service.salvar(clienteDTO));
	}
	
	@PutMapping
	public ResponseEntity<ClienteDTO> alterar(@RequestBody ClienteDTO clienteDTO){
		return ResponseEntity.ok(service.alterar(clienteDTO));
	}
	
	@DeleteMapping(path = {"/{id}"})
	public void deleteCliente(@PathVariable("id") long id) {
		service.remover(id);
	}
	
	@GetMapping(path = {"/total"})
	public int contarClientes(){
		return service.totalClientes();
	}

}