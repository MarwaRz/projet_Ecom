package com.ecom.dao;

import java.util.List;
import java.util.Optional;

import com.ecom.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Reservation;

@Repository
public interface ReservationDao extends CrudRepository<Reservation, Integer>{

    public List<Reservation> findAll(Pageable pageable);

    public List<Reservation> findByU(User u);

    public List<Reservation>  findByNomContainingIgnoreCaseOrReservationNameContainingIgnoreCase(
            String key1, String key2, Pageable pageable);


}
