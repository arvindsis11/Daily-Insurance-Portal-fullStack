package com.cognizant.policymicroservice.repository;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cognizant.policymicroservice.model.Transaction;

@DataJpaTest
class TransactionRepositoryTest {

	@MockBean
	private TransactionRepository repo;
	
	@Test
	void testFindAll() {
		Transaction transObj = new Transaction(1L,1000);
		when(repo.findAll()).thenReturn(Stream.of(transObj).collect(Collectors.toList()));
		assertThat(repo.findAll()).isNotNull();
	}
	
	@Test
	void testTransactionSave() {
		Transaction transObj = new Transaction(1L,1000);
		Transaction obj2 = new Transaction();
		obj2.setId(transObj.getId());
		obj2.setAmount(transObj.getAmount());
		when(repo.save(obj2)).thenReturn(transObj);
	}

}
