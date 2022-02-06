package com.chargestation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargestation.entity.ChargeStation;

@Repository
public interface ChargeStationDAO extends JpaRepository<ChargeStation,Long>{

}
