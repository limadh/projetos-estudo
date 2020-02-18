package com.backend.projeto.exceptions;

public class NotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3835722318551619384L;

	public NotFoundException(String mensagem) {
		super(mensagem);
	}

}
