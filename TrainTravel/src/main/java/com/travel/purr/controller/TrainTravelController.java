package com.travel.purr.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.travel.purr.DTO.TrainTravelDTO;
import com.travel.purr.service.TrainTravelService;

@RestController
public class TrainTravelController 
{
@Autowired	
TrainTravelService service;
@GetMapping(value="/getAllTravelList",produces="application/json")
public List<TrainTravelDTO> allTravelList()
{
	return service.getAllDetails();
}	
@GetMapping(value="/getPersonList",produces="application/json")
public List<TrainTravelDTO> ParticularTravelList(String name)
{
	return service.getParticularTraveller(name);
}
}

