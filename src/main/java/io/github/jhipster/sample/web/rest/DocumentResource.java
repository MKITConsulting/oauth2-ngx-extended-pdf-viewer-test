package io.github.jhipster.sample.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api")
public class DocumentResource {

    @Autowired
    ResourceLoader resourceLoader;

    /**
     * Get a test PDF document.
     */
    @GetMapping("/documents/testpdf")
    @Transactional
    public ResponseEntity<Resource> getDocumentAsFile() throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        Resource pdfResource = resourceLoader.getResource("classpath:test.pdf");
        InputStream input = pdfResource.getInputStream();
        File pdfFile = pdfResource.getFile();
        InputStreamResource streamResource = new InputStreamResource(new FileInputStream(pdfFile));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(pdfFile.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(streamResource);
    }
}
