package com.cognizant.policymicroservice.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.policymicroservice.model.Consumer;
import com.cognizant.policymicroservice.model.UserPolicyClaim;
import com.cognizant.policymicroservice.repository.ConsumerRepository;
import com.cognizant.policymicroservice.repository.UserPolicyClaimRepository;
import com.cognizant.policymicroservice.service.ConsumerService;

@Service
public class ConsumerServiceImpl implements ConsumerService{

	@Autowired
	ConsumerRepository consumerRepo;
	
	@Autowired
	UserPolicyClaimRepository userPolicyClaimRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(ConsumerServiceImpl.class);
	
	@Override
	public Consumer createConsumer(Consumer consumer) {
		logger.debug("Create Consumer and store into db");
		return consumerRepo.save(consumer);
	}
//for testing purpose only
	@Override
	public List<Consumer> viewConsumer() {
		logger.debug("View consumer details");
		return consumerRepo.findAll();
	}

}
