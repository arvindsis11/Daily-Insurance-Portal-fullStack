package com.cognizant.policymicroservice.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "Consumer")
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "Model object that stores the consumer's details")
public class Consumer {

	@Id
	@Column()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty("id of consumer")
	private Long user_id;

	@Column
	@ApiModelProperty("first name of consumer")
	private String first_name;

	@Column
	@ApiModelProperty("last name of consumer")
	private String last_name;

	@Column
	@ApiModelProperty("email id of consumer")
	private String email_id;
//	@JsonIgnore
//	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "consumer")
//	private UserPolicyClaim userClaim;

}