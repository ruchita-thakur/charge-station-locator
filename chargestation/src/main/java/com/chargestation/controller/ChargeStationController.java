package com.chargestation.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chargestation.dao.ChargeStationDAO;
import com.chargestation.entity.ChargeStation;
import com.chargestation.exception.ResourceNotFoundException;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ChargeStationController {
	
	@Autowired
	private ChargeStationDAO chargeStationDao;
	
	@GetMapping("/chargeStations")
	public List<ChargeStation> getAllStations(){
		return chargeStationDao.findAll();
		
	}
	
	@PostMapping("/chargeStations")
	public ChargeStation createStation(@RequestBody ChargeStation chargeStation) {
		return chargeStationDao.save(chargeStation);
		
	}
	
	@GetMapping("/chargeStations/{id}")
	public ResponseEntity<ChargeStation> getStationById(@PathVariable Long id) {
		ChargeStation station = chargeStationDao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Station does not exist with id :" + id));
		return ResponseEntity.ok(station);
	}
	
	@DeleteMapping("/chargeStations/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteStation(@PathVariable Long id){
		ChargeStation station = chargeStationDao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Station does not exist with id :" + id));
		
		chargeStationDao.delete(station);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
