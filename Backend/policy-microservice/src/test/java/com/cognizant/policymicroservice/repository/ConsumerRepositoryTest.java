package com.cognizant.policymicroservice.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cognizant.policymicroservice.model.Consumer;

@DataJpaTest
class ConsumerRepositoryTest {

	@MockBean
	ConsumerRepository cRepo;
	
	@Test
	void testFindAll() {
		Consumer cObj = new Consumer(1L, "Arvind", "Sisodiya", "arvindsis35@gmail.com");
		when(cRepo.findAll()).thenReturn(Stream.of(cObj).collect(Collectors.toList()));
		assertThat(cRepo.findAll()).isNotNull();
	}
	
	@Test
	void testSave() {
		Consumer cObj = new Consumer(1L, "Arvind", "Sisodiya", "arvindsis35@gmail.com");
		Consumer cObj2 = new Consumer();
		cObj2.setUser_id(cObj.getUser_id());
		cObj2.setFirst_name(cObj.getFirst_name());
		cObj2.setLast_name(cObj.getLast_name());
		cObj2.setEmail_id(cObj.getEmail_id());
		when(cRepo.save(cObj2)).thenReturn(cObj2);
		
		
	}

}
