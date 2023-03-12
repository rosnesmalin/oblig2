package com.example.oblig2;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    private final List<Billett> filmregister = new ArrayList<>();

    @PostMapping("/kjop")
    public void kjøp(Billett billett) {
        filmregister.add(billett);
    }

    @PostMapping ("/hentRegister")
    public List<Billett> hentRegister(){
        return filmregister;
    }

    @PostMapping("/slett")
    public List<Billett> slettRegister(){
        filmregister.clear();
        return filmregister;
    }
}
