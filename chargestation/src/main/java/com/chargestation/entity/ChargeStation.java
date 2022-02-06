package com.chargestation.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="charge_station")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChargeStation {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id")
	private long id;
	
	@Column(name="cityName", nullable=false)
	private String cityName;
	
	@Column(name="latitude", nullable=false)
	private double latitude;
	
	@Column(name="longitude", nullable=false)
	private double longitude;
	

}
