package de.booxware.controlers;

import com.google.gson.Gson;
import de.booxware.domain.Address;
import de.booxware.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by stas on 07/06/17.
 */
@Controller
public class AddressController {

    @Autowired
    AddressService addressService;

    @GetMapping("/")
    public String start() {
        return "startPage.html";
    }

    @PostMapping("/saveAddress")
    public String saveNewLocation(@RequestParam("address") String address) {
        boolean isSave = addressService.saveNewPosition(address);
        // todo add checks
        return "redirect:/";
    }

    @GetMapping("/loadAllAddresses")
    @ResponseBody
    public String loadAllAddresses() {
        List<Address> allAddresses = addressService.getAllAddresses();
        Object[] objects = allAddresses.toArray();
        Gson gson = new Gson();
        return gson.toJson(objects);
    }

}
