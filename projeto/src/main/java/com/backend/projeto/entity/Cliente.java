package com.backend.projeto.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "clientes", schema = "estudo")
public class Cliente implements Serializable{

	private static final long serialVersionUID = 3762243973179829477L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@NotEmpty
	@Column(name = "nome_cliente")
	private String nomeCliente;	

	@NotEmpty
	@Column(name = "email_cliente")
	private String emailCliente;

	@Column(name = "telefone_cliente")
	private String telefoneCliente;

	@Column(name = "obs_cliente")
	private String obsCliente;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "nascimento_cliente")
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