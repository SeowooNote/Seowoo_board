package com.seowoo.board.common.response;

public interface ResponseCode {
     // public static final String SUCCESS = "Success";
     String SUCCESS = "SU";

     String EXISTED_EMAIL  = "EE";
     String EXISTED_NICKNAME = "EN";
     String EXISTED_TELNUMBER = "ET";

     String NO_EXISTED_USER = "NU";
     String NO_EXISTED_BOARD = "NB";

     String NO_PERMISSION = "NP";

     String SIGN_IN_FAIL = "DM";

     String DATABASE_ERROR = "DE";
}
