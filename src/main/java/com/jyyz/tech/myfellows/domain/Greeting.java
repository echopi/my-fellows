package com.jyyz.tech.myfellows.domain;

/**
 * Greeting
 *
 * @author jiewei.ljw
 * @date 2018/02/10
 */
public class Greeting {
    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
