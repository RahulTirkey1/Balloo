package com.travel.purr.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.travel.purr.entity.TrainTravel;

@Repository
public interface TrainTravelRepository extends JpaRepository<TrainTravel,Integer>
{
@Query("select * from traintravel where username=?")	
public List<TrainTravel> getDetailsParticular(String name);
}
