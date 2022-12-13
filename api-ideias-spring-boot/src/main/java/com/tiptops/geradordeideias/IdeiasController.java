package com.tiptops.geradordeideias;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/ideias")
public class IdeiasController {

	private IdeiasRepository repository;
	
	// Here you can get All Ideias Meths on Database	
	
	@GetMapping
	public List<Ideia> GetAllIdeias() {
		return repository.findAll();
	}
	
	// Here you can get only Ideias on Database by 
	// primary key ( id )
	
	@GetMapping("/{id}")
	public Ideia findIdeiaById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	// Here you can Create a new Ideias on Database to
	// App List, must used when you want create a new ideia
	// to ansewer a question on the dropdow menu in the app
	
	@PostMapping
	public Ideia CreateNewIdeia(@RequestBody Ideia ideia) {
		return repository.save(ideia);
	}
	
	// Here has a function void were not has a return defined
	// This function gonna remove a Ideia on database, 
	// This process can be realised to delete forever on database stock
	
	@DeleteMapping("/{id}")
	public void DeleteIdeia(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
