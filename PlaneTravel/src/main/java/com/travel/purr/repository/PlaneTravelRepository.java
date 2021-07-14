package com.travel.purr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.travel.purr.entity.PlaneTravel;
@Repository
public interface PlaneTravelRepository extends JpaRepository<PlaneTravel,Integer>
{
	@Query("select * from traintravel where username=?")	
	public List<PlaneTravel> getDetailsParticular(String name);
}
