package com.sai.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("page")
    public String toPage(){
        System.out.println("...");
        return "page";
    }
}
