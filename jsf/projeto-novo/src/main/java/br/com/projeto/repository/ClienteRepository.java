package br.com.projeto.repository;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import br.com.projeto.model.Cliente;

@ApplicationScoped
public class ClienteRepository {

	@PersistenceContext
	private EntityManager em;

	public void novo(Cliente cliente) {
		em.persist(cliente);
	}

	public void alterar(Cliente cliente) {
		em.merge(cliente);
	}

	public void remover(Cliente cliente) {
		em.remove(em.find(Cliente.class, cliente.getId()));
	}

	public void removerPorId(final int id) {
		Cliente cliente = buscarPorId(id);
		remover(cliente);
	}

	public Cliente buscarPorId(final int id) {
		return em.find(Cliente.class, id);
	}

	public List<Cliente> buscarClientes() {
		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Cliente> criteria = builder.createQuery(Cliente.class);
		criteria.from(Cliente.class);
		return em.createQuery(criteria).getResultList();

		/*
		 * em.getTransaction().begin(); Query consulta =
		 * em.createQuery("SELECT * FROM clientes"); List<Cliente> lista =
		 * consulta.getResultList(); em.getTransaction().commit(); emf.close(); return
		 * lista;
		 */
	}

}
