package br.com.estudo.controller;

import javax.faces.bean.ManagedBean;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ManagedBean(name = "clienteBean")
public class ClienteBean {

	private Long id;
	private String nome;
	private String email;
	private String telefone;
	private String obs;
	
	
}
