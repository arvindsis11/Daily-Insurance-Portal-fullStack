package com.cognizant.walletmicroservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.walletmicroservice.model.Wallet;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long>{

}
