package com.travel.purr.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.travel.purr.dto.PlaneTravelDTO;
import com.travel.purr.service.PlaneService;
@RestController
public class PlaneTravelController 
{
	@Autowired	
	PlaneService service;
	@GetMapping(value="/getAllTravelList",produces="application/json")
	public List<PlaneTravelDTO> allTravelList()
	{
		return service.getAllDetails();
	}	
	@GetMapping(value="/getPersonList",produces="application/json")
	public List<PlaneTravelDTO> ParticularTravelList(String name)
	{
		return service.getParticularTraveller(name);
	}
}
