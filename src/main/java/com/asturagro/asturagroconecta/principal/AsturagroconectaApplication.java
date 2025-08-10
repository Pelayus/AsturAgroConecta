package com.asturagro.asturagroconecta.principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.asturagro.asturagroconecta")
@EntityScan(basePackages = "com.asturagro.asturagroconecta.modelo")
@EnableJpaRepositories(basePackages = "com.asturagro.asturagroconecta.repositorio")
public class AsturagroconectaApplication {
	
	@Bean
	public Principal applicationStartupRunner(){
		return new Principal();
	}

	public static void main(String[] args) {
		SpringApplication.run(AsturagroconectaApplication.class, args);
	}

}
