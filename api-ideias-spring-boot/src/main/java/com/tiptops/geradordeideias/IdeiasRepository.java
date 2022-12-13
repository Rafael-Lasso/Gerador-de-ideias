package com.tiptops.geradordeideias;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdeiasRepository extends JpaRepository<Ideia, Long>{

}
