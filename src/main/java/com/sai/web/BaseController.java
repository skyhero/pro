package com.sai.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;


/**
 * Created by zeroskywu on 2017/9/26.
 */
public class BaseController {

    protected final Logger logger = LoggerFactory.getLogger(getClass());

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        binder.registerCustomEditor(String.class,"param",new StringTrimmerEditor(true));
    }

    @ExceptionHandler
    public ModelAndView exceptionHandler(Exception exception, HttpServletResponse response){
        logger.warn("",exception);
        ModelMap models = new ModelMap();
        models.addAttribute("exception",exception);
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        return new ModelAndView("",models);
    }

}
