package com.cognizant.walletmicroservice.model;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TransactionTest {

	Transaction obj = new Transaction();
	
	@Test
	void testGetId() {
		obj.setId(1L);
		assertThat(obj.getId()).isEqualTo(1L);
	}

	@Test
	void testGetAmount() {
		obj.setAmount(100);
		assertThat(obj.getAmount()).isEqualTo(100);
	}
	@Test
	void testTransactionLongDouble() {
		obj = new Transaction(1L,100);
		assertEquals(obj, new Transaction(1L,100));
	}

	@Test
	void testTransaction() {
		obj = new Transaction();
		assertEquals(obj, new Transaction());
	}

}
