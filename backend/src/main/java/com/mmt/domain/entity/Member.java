package com.mmt.domain.entity;

import com.mmt.domain.request.UserSignUpReq;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends BaseTimeEntity {

    @Id
    private String userId;
    private String userPw;

    public Member(UserSignUpReq userSignUpReq){
        this.userId = userSignUpReq.getUserId();
        this.userPw = userSignUpReq.getUserPw();
    }
}
