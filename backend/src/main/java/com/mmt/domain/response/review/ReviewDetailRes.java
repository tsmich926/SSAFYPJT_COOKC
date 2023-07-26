package com.mmt.domain.response.review;

import com.mmt.domain.entity.Review;
import com.mmt.domain.response.ResponseDto;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ReviewDetailRes extends ResponseDto {
    private int reviewId;
    private String userId;
    private String nickname;
    private int lessonId;
    private String lessonTitle;
    private float rating;
    private String reviewContents;
    private String createdDate;
    private String modifiedDate;

    public ReviewDetailRes(Review review){
        this.reviewId = review.getReviewId();
        this.userId = review.getMember().getUserId();
        this.nickname = review.getMember().getNickname();
        this.lessonId = review.getLesson().getLessonId();
        this.lessonTitle = review.getLesson().getLessonTitle();
        this.rating = review.getRating();
        this.reviewContents = review.getReviewContents();
        this.createdDate = review.getCreatedDate().toString();
        this.modifiedDate = review.getModifiedDate().toString();
    }
}
