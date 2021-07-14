package com.travel.purr.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="traintravel")
public class TrainTravel 
{
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE)
private Integer id; 
private String username;
@Column(name="fromlocation",length=20)
private String fromLocation;
@Column(name="destination",length=20)
private String destination;
@Column(name="trainname",length=30)
private String trainName;
private LocalDate date;
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getFromLocation() {
	return fromLocation;
}
public void setFromLocation(String fromLocation) {
	this.fromLocation = fromLocation;
}
public String getDestination() {
	return destination;
}
public void setDestination(String destination) {
	this.destination = destination;
}
public String getTrainName() {
	return trainName;
}
public void setTrainName(String trainName) {
	this.trainName = trainName;
}
public LocalDate getDate() {
	return date;
}
public void setDate(LocalDate date) {
	this.date = date;
}

}
