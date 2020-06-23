package io.github.jhipster.sample.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfiguration {

    @Bean
    // Required to be able to autowire in services and controllers
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

}
