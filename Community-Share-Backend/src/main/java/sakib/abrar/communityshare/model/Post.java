package sakib.abrar.communityshare.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

import lombok.Data;

@Entity
@Data
@Table(name="tbl_post")
public class Post implements Serializable {
    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    private long postId;

    @Column(name = "post_type")
    private int postType;

    @Column(name = "post_text")
    private String postText;

    @Column(name = "link")
    private String link;

    @Column(name = "vote")
    private int vote;

    @Column(name = "shared_by")
    private String sharedBy;

    @Column(name = "shared_with")
    private String sharedWith;

    @Column(name = "shared_date")
    private Date date;

    protected Post() {
    }

    public Post(int postType, String postText, String link, int vote, String sharedBy, String sharedWith, Date date) {
        this.postType = postType;
        this.postText = postText;
        this.link = link;
        this.vote = vote;
        this.sharedBy = sharedBy;
        this.sharedWith = sharedWith;
        this.date = date;
    }

    @Override
    public String toString() {
        return String.format("Customer[id=%d, Post Type='%d', Post Text='%s', Link='%s', Shared By='%s']", postId, postType, postText, link, sharedBy);
    }
}
