package com.cognizant.policymicroservice.model;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class PolicyModelTest {

	PolicyMaster pobj = new PolicyMaster();
	Consumer cobj = new Consumer();

	@Test
	void testGetUser_id() {
		cobj.setUser_id(1L);
		assertThat(cobj.getUser_id()).isEqualTo(1L);

	}

	@Test
	void testGetFirst_name() {
		cobj.setFirst_name("arvind");
		assertThat(cobj.getFirst_name()).isEqualTo("arvind");
	}

	@Test
	void testGetLast_name() {
		cobj.setLast_name("sisodiya");
		assertThat(cobj.getLast_name()).isEqualTo("sisodiya");
	}

	@Test
	void testGetEmail_id() {
		cobj.setEmail_id("arvindsis35@gmail.com");
		assertThat(cobj.getEmail_id()).isEqualTo("arvindsis35@gmail.com");
	}

	@Test
	void testConsumer() {
		cobj = new Consumer();
		assertThat(cobj).isEqualTo(cobj);
	}

	@Test
	void testConsumerLongStringStringString() {
		cobj = new Consumer(1L, "arvind", "sisodiya", "arvindsis35@gmail.com");
		assertThat(cobj).isEqualTo(cobj);
	}

	@Test
	void testPolicyMasterModel() {

		pobj.setPolicy_id(1L);
		pobj.setPolicy_name("medical");
		pobj.setPolicyNameId("POL_1");
		pobj.setPolicy_premium(100);
		pobj.setPolicy_coverage(1000);
		pobj = new PolicyMaster();
		assertThat(pobj).isEqualTo(pobj);
		pobj = new PolicyMaster(1L, "POL_1", "medical", 100, 1000);
		assertThat(pobj).isEqualTo(pobj);
		assertThat(pobj.getPolicy_id()).isEqualTo(1L);
		assertThat(pobj.getPolicy_name()).isEqualTo("medical");
		assertThat(pobj.getPolicyNameId()).isEqualTo("POL_1");
		assertThat(pobj.getPolicy_premium()).isEqualTo(100);
		assertThat(pobj.getPolicy_coverage()).isEqualTo(1000);

	}

}
