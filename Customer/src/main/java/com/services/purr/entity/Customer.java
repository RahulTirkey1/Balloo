package com.services.purr.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer")
public class Customer 
{
@Id
@Column(name="username",length=15)
private String userName;
@Column(name="firstname",length=15,nullable=false)
private String firstName;
@Column(name="lastname",length=15,nullable=false)
private String lastName;
@Column(name="age",length=4,nullable=false)
private Integer age;
@Column(name="dateofbirth",nullable=false)
private LocalDate dateofBirth;
@Column(name="wallet",length=15,nullable=false)
private Double wallet;
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public Integer getAge() {
	return age;
}
public void setAge(Integer age) {
	this.age = age;
}
public LocalDate getDateofBirth() {
	return dateofBirth;
}
public void setDateofBirth(LocalDate dateofBirth) {
	this.dateofBirth = dateofBirth;
}
public Double getWallet() {
	return wallet;
}
public void setWallet(Double wallet) {
	this.wallet = wallet;
}


}
