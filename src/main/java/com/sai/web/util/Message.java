package com.sai.web.util;


public class Message {

    public enum Type{
        success,error
    }

    private Type type;

    private String content;

    public Message(){}

    public Message(Type type,String content){
        this.type = type;
        this.content = content;
    }

    public Message(Type type,String content,Object ... args){
        this.type = type;

    }
}
