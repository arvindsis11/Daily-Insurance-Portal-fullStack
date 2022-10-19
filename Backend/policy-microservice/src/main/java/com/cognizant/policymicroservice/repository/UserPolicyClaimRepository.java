package com.cognizant.policymicroservice.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.policymicroservice.model.PolicyMaster;
import com.cognizant.policymicroservice.model.UserPolicyClaim;

@Repository
public interface UserPolicyClaimRepository extends JpaRepository<UserPolicyClaim, Long>{

}
