package com.cognizant.walletmicroservice.service;

import java.util.List;

import com.cognizant.walletmicroservice.model.Wallet;

public interface WalletService {
	//some methodes are to be used as test
	
	public double getTotalBalance();
	
	public Wallet createWallet(Wallet walletObj);
	
	public List<Wallet> findAllWallets();

	//utility methods for transaction management
	public double withdraw(double amount);

	public double deposit(double amount);

	//method to be used by policy-microservice
	double policyWithdraw(double amount);

	//method to be used by processclaim-microservice
	double claimDeposit(double amount);

}
