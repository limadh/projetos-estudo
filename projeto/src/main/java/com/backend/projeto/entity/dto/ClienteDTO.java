package com.backend.projeto.entity.dto;

import java.io.Serializable;
import java.time.LocalDate;

public class ClienteDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2828376200339368335L;

	private Long id;

	private String nomeCliente;

	private String emailCliente;

	private String telefoneCliente;

	private String obsCliente;

	private LocalDate nascimentoCliente;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public String getEmailCliente() {
		return emailCliente;
	}

	public void setEmailCliente(String emailCliente) {
		this.emailCliente = emailCliente;
	}

	public String getTelefoneCliente() {
		return telefoneCliente;
	}

	public void setTelefoneCliente(String telefoneCliente) {
		this.telefoneCliente = telefoneCliente;
	}

	public String getObsCliente() {
		return obsCliente;
	}

	public void setObsCliente(String obsCliente) {
		this.obsCliente = obsCliente;
	}

	public LocalDate getNascimentoCliente() {
		return nascimentoCliente;
	}

	public void setNascimentoCliente(LocalDate nascimentoCliente) {
		this.nascimentoCliente = nascimentoCliente;
	}

}
