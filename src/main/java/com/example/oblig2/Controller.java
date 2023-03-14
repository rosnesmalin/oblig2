package com.example.oblig2;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    public final List<Billett> billettregister = new ArrayList<>();

    @PostMapping("/kjop")
    public void kjøp(Billett billett) {
        billettregister.add(billett);
    }

    @PostMapping ("/hentRegister")
    public List<Billett> hentRegister(){
        return billettregister;
    }

    @PostMapping("/slett")
    public List<Billett> slettRegister(){
        billettregister.clear();
        return billettregister;
    }
}
