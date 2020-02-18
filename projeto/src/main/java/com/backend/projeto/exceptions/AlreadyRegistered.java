package com.backend.projeto.exceptions;

public class AlreadyRegistered extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public AlreadyRegistered(String mensagem) {
		super(mensagem);
	}
}