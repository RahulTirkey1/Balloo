package com.services.purr.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.services.purr.entity.Customer;
import com.services.purr.entitydto.CustomerDTO;
import com.services.purr.repository.CustomerRepository;

@Service
public class CustomerService 
{
@Autowired
CustomerRepository repository;

public List<CustomerDTO> getAllCustomers()
{
	List<Customer> customer=new ArrayList<Customer>();
	List<CustomerDTO> customers=new ArrayList<CustomerDTO>();
	customer=repository.findAll();
	for(int i=0;i<customer.size();i++)
	{
		Customer cust=new Customer();
		CustomerDTO custdto=new CustomerDTO();
	    cust=customer.get(i);
        BeanUtils.copyProperties(cust, custdto);
        customers.add(custdto);
	}
	return customers;
	
}
public CustomerDTO getACustomer()
{
	
}
}
