/*package com.ecom.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

public class OrderInput {

	private String fullName;
	private String fullAddress;
	private String contactNumber;
	private String alternateContactNumber;
	private Integer surface;
	private Integer intervention;

	private String prestation;
	private Integer total;
	private String employe;
	private List<OrderProductQuantity> orderProductQuantityList;
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "commentaire_image",
			joinColumns = {
					@JoinColumn(name = "commentaireinput_id")
			},
			inverseJoinColumns = {
					@JoinColumn(name = "imagec_id")
			})
	private Set<ImageResrv> Images;



	public OrderInput() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getEmploye() {
		return employe;
	}

	public void setEmploye(String employe) {
		this.employe = employe;
	}

	public Integer getSurface() {
		return surface;
	}

	public void setSurface(Integer surface) {
		this.surface = surface;
	}

	public String getFullName() {
		return fullName;
	}

	public Integer getTotal() {
		return total;
	}

	public Set<ImageResrv> getImages() {
		return Images;
	}

	public void setImages(Set<ImageResrv> images) {
		Images = images;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public List<OrderProductQuantity> getOrderProductQuantityList() {
		return orderProductQuantityList;
	}

	public void setOrderProductQuantityList(List<OrderProductQuantity> orderProductQuantityList) {
		this.orderProductQuantityList = orderProductQuantityList;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getFullAddress() {
		return fullAddress;
	}

	public void setFullAddress(String fullAddress) {
		this.fullAddress = fullAddress;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getAlternateContactNumber() {
		return alternateContactNumber;
	}

	public void setAlternateContactNumber(String alternateContactNumber) {
		this.alternateContactNumber = alternateContactNumber;
	}


	public String getPrestation() {
		return prestation;
	}

	public void setPrestation(String prestation) {
		this.prestation = prestation;
	}

	public Integer getIntervention() {
		return intervention;
	}

	public void setIntervention(Integer intervention) {
		this.intervention = intervention;
	}
}*/
