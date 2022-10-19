package com.cognizant.policymicroservice.service;

import java.util.List;

import com.cognizant.policymicroservice.model.Consumer;

public interface ConsumerService {
	
	public Consumer createConsumer(Consumer consumer);
	
	public List<Consumer> viewConsumer();

}
