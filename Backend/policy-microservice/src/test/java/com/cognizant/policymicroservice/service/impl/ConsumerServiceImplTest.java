package com.cognizant.policymicroservice.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cognizant.policymicroservice.model.Consumer;
import com.cognizant.policymicroservice.repository.ConsumerRepository;

@SpringBootTest
class ConsumerServiceImplTest {
	
	@Autowired
	ConsumerServiceImpl service;
	
	@MockBean
	ConsumerRepository consumerRepo;

	@Test
	void testCreateConsumer() {
		Consumer cObj = new Consumer(1L, "Arvind", "sisodiya", "arvindsis35@gmail.com");
		when(consumerRepo.save(cObj)).thenReturn(cObj);
		assertThat(service.createConsumer(cObj)).isEqualTo(cObj);
	}

	@Test
	void testViewConsumer() {
		when(consumerRepo.findAll()).thenReturn(Stream.of(new Consumer(1L, "Arvind", "sisodiya", "arvindsis35@gmail.com"),new Consumer(2L, "Arvind2", "sisodiya2", "arvindsis35@gmail.com")).collect(Collectors.toList()));
		assertThat(service.viewConsumer().size()).isEqualTo(2);
	}

}
