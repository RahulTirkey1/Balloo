package com.travel.purr.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.travel.purr.dto.PlaneTravelDTO;
import com.travel.purr.entity.PlaneTravel;
import com.travel.purr.repository.PlaneTravelRepository;
@Service
public class PlaneService 
{
	@Autowired
	PlaneTravelRepository repository;

	public List<PlaneTravelDTO> getAllDetails()
	{
		List<PlaneTravel> traveller=repository.findAll();
		List<PlaneTravelDTO> travellers=new ArrayList<PlaneTravelDTO>();
		for(PlaneTravel tr:traveller)
		{
			PlaneTravelDTO trr=new PlaneTravelDTO();
			BeanUtils.copyProperties(tr, trr);
			travellers.add(trr);
		}
		return travellers;
		
	}
	public List<PlaneTravelDTO> getParticularTraveller(String travellername)
	{
		List<PlaneTravel> traveller=repository.getDetailsParticular(travellername);
		List<PlaneTravelDTO> travellers=new ArrayList<PlaneTravelDTO>();
		for(PlaneTravel tr:traveller)
		{
			PlaneTravelDTO trr=new PlaneTravelDTO();
			BeanUtils.copyProperties(tr, trr);
			travellers.add(trr);
		}
		return travellers;
	}
}
