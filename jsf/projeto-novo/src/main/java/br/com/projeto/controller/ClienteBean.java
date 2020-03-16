package br.com.projeto.controller;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Inject;
import javax.inject.Named;

import br.com.projeto.model.Cliente;
import br.com.projeto.server.ClienteServer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Named(value = "clienteBean")
@RequestScoped
public class ClienteBean {

	@Inject
	private ClienteServer server;

	@Inject
	private Cliente cliente;

	private List<Cliente> clientes;

	private boolean btn = true;
	
	private String pesquisa;

	@PostConstruct
	public void init() {
		this.clientes = server.buscarClientes();
	}

	public String novo() {
		try {
			server.novo(cliente);
			this.info("Cliente cadastrado com sucesso!");
			return "editar.xhtml";
		} catch (Exception ex) {
			this.error("Erro! Cliente Não Cadastrado!");
			ex.printStackTrace();
			return "";
		}
	}

	public String editar(Cliente cliente) {
		this.cliente = cliente;
		return "editar.xhtml";
	}

	public String alterar() {
		try {
			server.alterar(cliente);
			this.info("Cliente alterado com sucesso!");
			return "editar.xhtml";
		} catch (Exception ex) {
			this.error("Erro! Cliente Não Alterado!");
			ex.printStackTrace();
			return "";
		}
	}

	public String deletar() {
		try {
			server.deletar(cliente);
			this.btn = false;
			this.info("Cliente deletado com sucesso!");
			return "editar.xhtml";
		} catch (Exception ex) {
			this.error("Erro! Cliente Não deletado!");
			ex.printStackTrace();
			return "";
		}
	}

	public void info(String msg) {
		FacesContext.getCurrentInstance().addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Info", msg));
	}

	public void error(String msg) {
		FacesContext.getCurrentInstance().addMessage(null,
				new FacesMessage(FacesMessage.SEVERITY_ERROR, "Error!", msg));
	}

	public void warn(String msg) {
		FacesContext.getCurrentInstance().addMessage(null,
				new FacesMessage(FacesMessage.SEVERITY_WARN, "Warning!", msg));
	}

	public void fatal(String msg) {
		FacesContext.getCurrentInstance().addMessage(null,
				new FacesMessage(FacesMessage.SEVERITY_FATAL, "Fatal!", msg));
	}

	public void confirmarExclusao() {
		this.deletar();
	}
}
