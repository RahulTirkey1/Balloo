package com.services.purr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.services.purr.entity.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer,String>
{

}
