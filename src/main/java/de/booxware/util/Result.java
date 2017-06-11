package de.booxware.util;

/**
 * Created by stas on 11/06/17.
 */
public class Result {

    private boolean success;
    private String descpition;

    public Result(boolean success, String descpition) {
        this.success = success;
        this.descpition = descpition;
    }

    public Result() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getDescpition() {
        return descpition;
    }

    public void setDescpition(String descpition) {
        this.descpition = descpition;
    }
}
