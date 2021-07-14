package com.travel.purr.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.purr.DTO.TrainTravelDTO;
import com.travel.purr.entity.TrainTravel;
import com.travel.purr.repository.TrainTravelRepository;

@Service
public class TrainTravelService 
{
@Autowired
TrainTravelRepository repository;

public List<TrainTravelDTO> getAllDetails()
{
	List<TrainTravel> traveller=repository.findAll();
	List<TrainTravelDTO> travellers=new ArrayList<TrainTravelDTO>();
	for(TrainTravel tr:traveller)
	{
		TrainTravelDTO trr=new TrainTravelDTO();
		BeanUtils.copyProperties(tr, trr);
		travellers.add(trr);
	}
	return travellers;
	
}
public List<TrainTravelDTO> getParticularTraveller(String travellername)
{
	List<TrainTravel> traveller=repository.getDetailsParticular(travellername);
	List<TrainTravelDTO> travellers=new ArrayList<TrainTravelDTO>();
	for(TrainTravel tr:traveller)
	{
		TrainTravelDTO trr=new TrainTravelDTO();
		BeanUtils.copyProperties(tr, trr);
		travellers.add(trr);
	}
	return travellers;
}
}
